import sqlite3 as sql
import os
import hashlib
from flask_login import UserMixin
from datetime import datetime
import time
import math

def connect():

    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("PRAGMA foreign_keys = ON")
    create(c)
    conn.commit()
    conn.close()

def create(c):
    try:

        c.execute("""CREATE TABLE IF NOT EXISTS members (
                    memberid integer PRIMARY KEY,
                    firstname text,
                    lastname text,
                    email text,
                    passwordhash text
        )""")

    except:
        print("Create member table error")
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS efficiencylist (
                    projectid integer,
                    taskid integer,
                    efficiency real,
                    PRIMARY KEY (projectid, taskid)
        )""")

    except Exception as e:
        print("Create efficiencylist table error")
        print(str(e))
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS projectslist (
                    projectid integer,
                    projecttitle text,
                    colour text,
                    description text,
                    PRIMARY KEY (projectid)
        )""")

    except Exception as e:
        print("Create projectslist table error")
        print(str(e))
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS projectmembers (
                    memberid integer,
                    projectid integer,
                    role text,
                    PRIMARY KEY (memberid, projectid)
        )""")

    except:
        print("Create projectmembers table error")
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS tasks (
                    taskid integer,
                    projectid integer,
                    title text,
                    description text,
                    deadline real,
                    complete text,
                    setdate real,
                    PRIMARY KEY (taskid)
        )""")

    except Exception as e:
        print("Create tasks table error")
        print(str(e))
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS membertasks (
                    memberid integer,
                    taskid integer,
                    status text,
                    PRIMARY KEY (memberid,taskid)
        )""")

    except:
        print("Create membertasks table error")
        pass

def recordExists(email):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    c.execute("""SELECT email FROM members WHERE email=?""",(email,))

    if c.fetchone():
        c.close()
        return True
    else:
        return False

def existsByID(userid):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    c.execute("""SELECT memberid FROM members WHERE memberid=?""",(userid,))

    if c.fetchone():
        c.close()
        return True
    else:
        return False

def getIDbyEmail(email):

    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("""SELECT memberid FROM members WHERE email=?""",(email,))

    try:
        id = c.fetchall()[0][0]
        return id
    except:
        return "False"

###########################################################
# User Class for login authentication #####################
###########################################################
class User(UserMixin):
    def __init__(self,c,userid):
        self.userid = userid
        c.execute("""SELECT firstname FROM members WHERE memberid=?""",(userid,))
        self.firstname = c.fetchall()[0][0]
        c.execute("""SELECT lastname FROM members WHERE memberid=?""",(userid,))
        self.lastname = c.fetchall()[0][0]
        c.execute("""SELECT email FROM members WHERE memberid=?""",(userid,))
        self.email = c.fetchall()[0][0]
        #self.is_authenticated = True
        #self.is_active = True
        #self.is_anonymous = False

    def get_id(self):
        return chr(self.userid)

def userObj(userid):

    if existsByID(userid):

        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()

        return User(c,userid)

    else:
        return None

def getStoredPassword(email):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    c.execute("""SELECT passwordhash FROM members WHERE email=?""",(email,))

    return c.fetchall()

def hashpassword(password):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 400000)
    return salt+key

def addUser(firstname,lastname,email,password):

    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 400000)

    store = salt+key

    if (recordExists(email)):
        try:
            c.execute("""update members
                        set passwordhash=?
                        where email=?
            """,(store,email,))
        except:
            print("Failed to update login information")
    else:
        try:
            c.execute("""insert into members (memberid,firstname,lastname,email,passwordhash) values (NULL,?,?,?,?)""",(firstname,lastname,email,store,))
        except:
            print("Failed to add user")

    conn.commit()
    conn.close()

def addEfficiency(type,efficiency,memberid,skill,projectid):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    now = datetime.now()
    date = str(now.day)+":"+str(now.month)+":"+str(now.year)
    timestore = str(now.hour)+":"+str(now.minute)+":"+str(now.second)+":"+str(now.microsecond)
    t = datetime(now.year,now.month,now.day,now.hour,now.minute,now.second)
    timesec = time.mktime(t.timetuple())
    c.execute("""insert into efficiencylist (date,time,timesec,type,efficiency,memberid,skill,projectid) values (?,?,?,?,?,?,?,?)""",(date,timestore,timesec,type,efficiency,memberid,skill,projectid,))
    conn.commit()
    conn.close()

def getEfficiencies(memberid,type,place):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    efficiencies = {}
    c.execute("""SELECT skill FROM efficiencylist WHERE memberid=?""",(memberid,))
    skills = c.fetchall()
    c.execute("""SELECT efficiency FROM efficiencylist WHERE memberid=? and type=?""",(memberid,type,))
    efficienciesFromDB = c.fetchall()
    if len(skills) > 0:

        for i in range(len(skills)):
            efficiencies[skills[i][0]] = []

        for i in range(len(skills)):
            try:
                efficiencies[skills[i][0]].append(efficienciesFromDB[i][0])
            except:
                return {"ERROR":"ERROR"}


        efficienciesavg = []
        for skill in efficiencies.keys():
            skillavg = {}
            esum = 0
            efflist = efficiencies[skill]
            for e in efflist:
                esum += e
            esumavg = round((esum)/(len(efflist)),2)

            skillavg["skillAbbrv"] = getSkillAbbrv(skill)
            skillavg["skillTitle"] = skill
            skillavg["avg"] = esumavg
            efficienciesavg.append(skillavg)

        if place == "max":
            return sorted(efficienciesavg, reverse=True ,key=lambda i: i["avg"])
        elif place == "min":
            return sorted(efficienciesavg, key=lambda i: i["avg"])
    return []

def addProject(projecttitle,colour,description):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("""insert into projectslist (projectid,projecttitle,colour,description) values (NULL,?,?,?)""",(projecttitle,colour,description))
    c.execute("""select projectid from projectslist where projecttitle=?""",(projecttitle,))
    projects = c.fetchall()
    conn.commit()
    conn.close()

    return projects[-1][0]

def addMemberToProject(userid,projectid,role):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    try:
        c.execute("""select memberid from projectmembers where projectid=? and memberid=?""",(projectid,userid,))
        if c.fetchone() == None:
            try:
                c.execute("""insert into projectmembers (memberid,projectid,role) values (?,?,?)""",(userid,projectid,role,))
            except Exception as e:
                return(str(e))
    except:
        print("Exception")


    conn.commit()
    conn.close()

def addMemberToTask(userid,taskid):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    try:
        c.execute("""select memberid from membertasks where taskid=? and memberid=?""",(taskid,userid,))
        if c.fetchone() == None:
            try:
                c.execute("""insert into membertasks (memberid,taskid,status) values (?,?,?)""",(userid,taskid,"in progress",))
            except Exception as e:
                return(str(e))
    except:
        print("Exception")


    conn.commit()
    conn.close()

def getProjectMembers(projectid):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    try:
        c.execute("""select memberid from projectmembers where projectid=?""",(projectid,))
        members = c.fetchall()

        memberlist = []
        for member in members:
            id = member[0]
            c.execute("""select firstname, lastname from members where memberid=?""",(id,))
            name = c.fetchone()
            firstname = name[0]
            lastname = name[1]
            name = firstname + " " + lastname
            memberlist.append([id,name])

        return memberlist
    except:
        print("Exception")

    conn.close()

def getProjectNames(userid):
    projects = []
    projectids = []
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    try:
        c.execute("""SELECT projectid FROM projectmembers where memberid=?""",(userid,))

        for project in c.fetchall():
            projectids.append(project[0])

        for id in projectids:
            c.execute("""select projecttitle from projectslist where projectid=?""",(id,))
            title = c.fetchone()[0]
            c.execute("""select colour from projectslist where projectid=?""",(id,))
            colour = c.fetchone()[0]
            projects.append({"id":id,"title":title,"colour":colour})
    except:
        pass
    return projects

# Needs to return task name, project name and efficiency value using user id
def getRecentEfficiencies(userid):
    # [{"ProjectTitle":"Family Tasks","TaskTitle":"Task 3","avg":91.54}]
    tasks = []
    # Must get tasks then get the efficiencies of the completed ones
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT taskid FROM membertasks where memberid=?""",(userid,))
        tasksQuery = c.fetchall()
        for task in tasksQuery:
            try:
                c.execute("""SELECT title FROM tasks where taskid=?""",(task[0],))
                taskname = c.fetchone()[0]
                c.execute("""SELECT projectid FROM efficiencylist where taskid=?""",(task[0],))
                projectid = c.fetchone()[0]
                c.execute("""SELECT projecttitle FROM projectslist where projectid=?""",(projectid,))
                projecttitle = c.fetchone()[0]
                c.execute("""SELECT efficiency FROM efficiencylist where taskid=?""",(task[0],))
                efficiency = c.fetchone()[0]
                tasks.append({"ProjectTitle":projecttitle,"TaskTitle":taskname,"avg":efficiency})
            except:
                pass
    except Exception as e:
        print(e)
    return tasks

def getProjectTitle(projectid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT projecttitle FROM projectslist where projectid=?""",(projectid,))
        return c.fetchone()[0]
    except:
        return "none"

def getProjectColour(projectid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT colour FROM projectslist where projectid=?""",(projectid,))
        return c.fetchone()[0]
    except:
        return "none"

def getLastnameByID(userid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT lastname FROM members where memberid=?""",(userid,))
        return c.fetchone()[0]
    except:
        return "none"

def getOverviewTasks(userid):

    # Need to get task name, the project the task is from, the due date and the task id
    # Get all task ids assigned to the user
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT taskid FROM membertasks where memberid=?""",(userid,))
        taskids = []
        for task in c.fetchall():
            taskids.append(task[0])

        #Get project id, title and deadline using task id from tasks
        tasklist = []
        newtasklist = []
        for taskid in taskids:
            c.execute("""SELECT projectid, title, deadline, complete FROM tasks where taskid=?""",(taskid,))
            task = c.fetchone()
            # taskid, projectid, title, deadline, complete
            tasklist.append([taskid,task[0],task[1],task[2],task[3]])

        # Get project title using projectid from projects list
        for task in tasklist:
            c.execute("""SELECT projecttitle FROM projectslist where projectid=?""",(task[1],))
            projecttitle = c.fetchone()[0]
            # task id, project title, project id,
            newtasklist.append([task[0],projecttitle,task[2],task[3],task[4]])
        return newtasklist
    except:
        return "none"

def getProjectTasks(projectid,memberid):

    # Need to get task name, the project the task is from, the due date and the task id
    # Get all task ids assigned to the user
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT taskid, title, deadline, complete FROM tasks where projectid=?""",(projectid,))
        # Needs to return list of dictionaries with each task id as the key and all the values as the value
        tasksQuery = c.fetchall()
        tasks = []
        for task in tasksQuery:
            issues = 0
            c.execute("""SELECT status FROM membertasks where taskid=?""",(task[0],))
            statuses = c.fetchall()
            for status in statuses:
                if status[0] == "issue":
                    issues += 1
            # [{id:[title,deadline,complete,isassigned,issues]}]
            tasks.append({task[0]:[task[1],task[2],task[3],isTaskAssignedToMember(task[0],memberid),issues]})

        return tasks
        # Obtain task name, description, deadline, complete

    except Exception as e:
        return "none"

def isTaskAssignedToMember(taskid,memberid):

    # Need to get task
    # Get all task ids assigned to the user
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT status FROM membertasks where taskid=? and memberid=?""",(taskid,memberid,))
        # Needs to return list of dictionaries with each task id as the key and all the values as the value
        tasksQuery = c.fetchone()[0]

        return "Yes"
        # Obtain task name, description, deadline, complete

    except Exception as e:
        return "No"

def getTaskName(taskid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT title FROM tasks where taskid=?""",(taskid,))
        return c.fetchone()[0]
    except:
        return "none"

def getTaskProjectID(taskid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT projectid FROM tasks where taskid=?""",(taskid,))
        return c.fetchone()[0]
    except:
        return "none"

def getTaskDescription(taskid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT description FROM tasks where taskid=?""",(taskid,))
        return c.fetchone()[0]
    except:
        return "none"

def getProjectDescription(projectid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT description FROM projectslist where projectid=?""",(projectid,))
        return c.fetchone()[0]
    except:
        return "none"

def updateTask(taskid,state):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()

        c.execute("UPDATE tasks SET complete='"+str(state)+"' WHERE taskid="+taskid)

        if str(state) == "True":

            # Calculate efficiency, requires ratio
            c.execute("""SELECT setdate FROM tasks where taskid=?""",(taskid,))
            setdate = c.fetchone()[0]

            c.execute("""SELECT deadline FROM tasks where taskid=?""",(taskid,))
            deadline = c.fetchone()[0]

            now = time.time()*1000

            c.execute("""SELECT projectid FROM tasks where taskid=?""",(taskid,))
            projectid = c.fetchone()[0]

            # Time given over time taken
            ratio = (deadline - setdate) / (now - setdate)
            if ratio >= 1:
                k = 5
                cotpoint = 1/math.tan(5/math.pi)
                a = (1/k)-cotpoint
                efficiency = 20*(math.pi * ((math.pi/2)-math.atan((ratio/k)-a)))

                c.execute("""insert into efficiencylist (projectid,taskid,efficiency) values (?,?,?)""",(projectid,taskid,efficiency,))
            else:
                efficiency = 100*((math.sin((ratio**2)/2)**2))
                c.execute("""insert into efficiencylist (projectid,taskid,efficiency) values (?,?,?)""",(projectid,taskid,efficiency,))

        else:
            c.execute("""delete from efficiencylist where taskid=?""",(taskid,))

        conn.commit()
        conn.close()

    except Exception as e:
        print(str(e))
        return "none"

def addTask(projectid,title,deadline,description):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT taskid FROM tasks""")
        try:
            tasks = c.fetchall()
            highestid = 0
            for task in tasks:
                if task[0] > highestid:
                    highestid = task[0]
        except:
            latesttask = 0
        c.execute("""insert into tasks (projectid,taskid,title,description,deadline,complete,setdate) values (?,?,?,?,?,?,?)""",(int(projectid),highestid+1,title,description,float(deadline),"False",time.time()*1000))
        conn.commit()
        conn.close()
    except Exception as e:
        print("Error adding task")
        print(str(e))
    return

def deleteTask(taskid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""delete FROM tasks where taskid=?""",(taskid))
        c.execute("""delete FROM efficiencylist where taskid=?""",(taskid))
        c.execute("""delete FROM membertasks where taskid=?""",(taskid))
        conn.commit()
        conn.close()
    except Exception as e:
        print("Error deleting task in sp")
        print(str(e))
    return

def getTaskMembers(taskid):

    # Need to get task
    # Get all task ids assigned to the user
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""SELECT memberid FROM membertasks where taskid=?""",(taskid,))
        membersQuery = c.fetchall()
        members = []
        for i in range(len(membersQuery)):
            id  = membersQuery[i][0]
            c.execute("""SELECT firstname FROM members where memberid=?""",(id,))
            memberfirstname = c.fetchone()[0]
            c.execute("""SELECT lastname FROM members where memberid=?""",(id,))
            memberlastname = c.fetchone()[0]
            membername = memberfirstname + " " + memberlastname
            c.execute("""SELECT status FROM membertasks where memberid=? and taskid=?""",(id,taskid,))
            status = c.fetchone()[0]
            members.append([id,membername,status])

        return members
        # Obtain task name, description, deadline, complete
    except:
        return

def updateMemberTaskStatus(memberid,taskid,newStatus):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("UPDATE membertasks SET status='"+str(newStatus)+"' WHERE taskid="+str(taskid)+" and memberid="+str(memberid))
        conn.commit()
        conn.close()
    except Exception as e:
        print(e)

def getProjectEfficiency(projectid):
    try:
        conn = sql.connect('sqlite3/main.db')
        c = conn.cursor()
        c.execute("""select efficiency from efficiencylist where projectid=?""",(projectid,))
        efficiencies = c.fetchall()
        if len(efficiencies) > 0:
            efficiencysum = 0
            for efficiency in efficiencies:
                efficiencysum += efficiency[0]
            projectEfficiency = efficiencysum / len(efficiencies)
        else:
            projectEfficiency = float(100)
        return projectEfficiency

    except Exception as e:
        print(e)
