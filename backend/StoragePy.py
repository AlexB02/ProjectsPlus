import sqlite3 as sql
import os
import hashlib
from flask_login import UserMixin
from datetime import datetime
import time

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
        c.execute("""CREATE TABLE IF NOT EXISTS skillslist (
                    title text PRIMARY KEY,
                    iconlocation text,
                    abbrv text

        )""")

    except:
        print("Create skillslist table error")
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS efficiencylist (
                    date text,
                    time text,
                    timesec real,
                    type text,
                    efficiency real,
                    memberid integer,
                    skill text,
                    projectid integer,
                    PRIMARY KEY (memberid, skill, timesec)
        )""")

    except Exception as e:
        print("Create efficiencylist table error")
        print(str(e))
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS projectslist (
                    projectid integer,
                    projecttitle text,
                    iconlocation text,
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
                    projectid integer,
                    taskid integer,
                    title text,
                    description text,
                    deadline real,
                    complete text,
                    PRIMARY KEY (projectid,taskid)
        )""")

    except:
        print("Create tasks table error")
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

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS taskskills (
                    taskid integer,
                    skillid integer,
                    PRIMARY KEY (taskid,skillid)
        )""")

    except:
        print("Create taskskills table error")
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

def addSkill(skill,abbrv):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("""SELECT title FROM skillslist WHERE title=?""",(skill,))
    if not c.fetchone():
        c.execute("""insert into skillslist (title,iconlocation,abbrv) values (?,?,?)""",(skill,"/",abbrv,))
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

def getSkillsList():
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    skills = []
    c.execute("""SELECT title FROM skillslist""")
    for skill in c.fetchall():
        skills.append(skill[0])

    return skills

def getSkillAbbrv(skill):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("""SELECT abbrv FROM skillslist where title=?""",(skill,))
    return c.fetchone()[0]

def addProject(projecttitle,colour,description):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("""insert into projectslist (projectid,projecttitle,iconlocation,colour,description) values (NULL,?,?,?,?)""",(projecttitle,"/",colour,description))
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
    c.execute("""SELECT projectid FROM projectmembers where memberid=?""",(userid,))

    for project in c.fetchall():
        projectids.append(project[0])

    for id in projectids:
        c.execute("""select projecttitle from projectslist where projectid=?""",(id,))
        title = c.fetchone()[0]
        c.execute("""select colour from projectslist where projectid=?""",(id,))
        colour = c.fetchone()[0]
        projects.append({"id":id,"title":title,"colour":colour})
    return projects

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

def getProjectTasks(projectid):

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
            tasks.append({task[0]:[task[1],task[2],task[3]]})

        return tasks
        # Obtain task name, description, deadline, complete

    except Exception as e:
        return "none"

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

        conn.commit()
        conn.close()

    except Exception as e:
        print(str(e))
        return "none"
