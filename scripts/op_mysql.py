# -*- coding: utf-8 -*- 
import MySQLdb
import sys

# 1 add 2 select 3 delete
def op_MySQLdb(type):
	db = MySQLdb.connect("178.128.184.164", "yucheng", "yu10800258", "yc_first_web", charset='utf8')
	cursor = db.cursor()
	if type == 1:
		add_sql = "INSERT INTO USER_INFORMATION(USER_NAME, PASSWD, \
		EMAIL, PHONE, FIRST_NAME, LAST_NAME, PASSWD_QUESTION, PASSWD_ANSWER) \
		VALUES('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % \
		(sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9])
		# try:
		cursor.execute(add_sql)
		db.commit()
		# except:
		# 	print "add error"
		# 	db.rollback()
	elif type == 2:
		select_sql = "SELECT PASSWD FROM USER_INFORMATION WHERE USER_NAME = '%s'" % (sys.argv[2])
		try:
			cursor.execute(select_sql)
			results = cursor.fetchall()
			for row in results:
				pass_wd = row[0]
			if pass_wd == sys.argv[3]:
				print ("success")
			else:
				print ("passwd error")
		except:
			print "select error"
	db.close()

def main():
	if int(sys.argv[1]) == 1:
		op_MySQLdb(1)
	elif int(sys.argv[1]) == 2:
		op_MySQLdb(2)

if __name__ == '__main__':
	main()