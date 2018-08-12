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
		(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8])
		try:
			cursor.execute(add_sql)
			db.commit()
		except:
			print "add error"
			db.rollback()
	elif type == 2:
		select_sql = "SELECT PASSWD FROM USER_INFORMATION WHERE USER_NAME = '%s'" % (sys.argv[1])
		try:
			cursor.execute(select_sql)
			results = cursor.fetchall()
			for row in results:
				pass_wd = row[0]
		except:
			print "select error"
	db.close()

def main():
	op_MySQLdb(1)

if __name__ == '__main__':
	main()