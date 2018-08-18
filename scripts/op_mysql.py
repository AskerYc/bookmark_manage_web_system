# -*- coding: utf-8 -*- 
import MySQLdb
import sys

# 1 add 2 select 3 delete
def op_MySQLdb(type):
	db = MySQLdb.connect("178.128.184.164", "yucheng", "yu10800258", "yc_first_web", charset='utf8')
	cursor = db.cursor()
	qr_sql = "SELECT * FROM USER_INFORMATION WHERE USER_NAME = '%s'" % (sys.argv[2].decode("gbk").encode("utf-8"))
	cursor.execute(qr_sql)
	results = cursor.fetchall()
	if type == 1:
		if len(results) != 0:
			print ("user_name exists")
			return
		add_sql = "INSERT INTO USER_INFORMATION(USER_NAME, PASSWD, \
		EMAIL, PHONE, FIRST_NAME, LAST_NAME, PASSWD_QUESTION, PASSWD_ANDWER) \
		VALUES('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % \
		(sys.argv[2].decode("gbk").encode("utf-8"), sys.argv[3].decode("gbk").encode("utf-8"), sys.argv[4].decode("gbk").encode("utf-8"), sys.argv[5].decode("gbk").encode("utf-8"), sys.argv[6].decode("gbk").encode("utf-8"), sys.argv[7].decode("gbk").encode("utf-8"), sys.argv[8].decode("gbk").encode("utf-8"), sys.argv[9].decode("gbk").encode("utf-8"))
		try:
			cursor.execute(add_sql)
			add_sql = "INSERT INTO URL_INFO(USER_NAME, INDEX_NAME, NUM) VALUES('%s', '%d', '%d')" % \
			(sys.argv[2], 0, 0)
			cursor.execute(add_sql)
			db.commit()
		except:
			print "add error"
			db.rollback()

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

def add_url(user_name,url):
	db = MySQLdb.connect("178.128.184.164", "yucheng", "yu10800258", "yc_first_web", charset='utf8')
	cursor = db.cursor()
	qr_sql = "SELECT NUM FROM URL_INFO WHERE USER_NAME = '%s' AND INDEX_NAME = 0" % (user_name)
	cursor.execute(qr_sql)
	results = cursor.fetchall()
	if len(results) == 0:
		print ("user_name exists")
		return
	try:
		num_url=results[0][0]
		md_sql = "UPDATE URL_INFO SET NUM='%d' WHERE USER_NAME='%s' AND INDEX_NAME='%d'"%(num_url+1, user_name, 0)
		cursor.execute(md_sql)
		add_sql = "INSERT INTO URL_INFO(USER_NAME,INDEX_NAME,URL_NAME) VALUES('%s', '%d', '%s')"%(user_name, num_url+1, url)
		cursor.execute(add_sql)
		db.commit()
		print("success add url")
	except:
		print("failed add url")
def qr_url(user_name):
	db = MySQLdb.connect("178.128.184.164", "yucheng", "yu10800258", "yc_first_web", charset='utf8')
	cursor = db.cursor()
	qr_sql = "SELECT URL_NAME FROM URL_INFO WHERE USER_NAME = '%s' AND INDEX_NAME != 0" % (user_name)
	qr_sql_ = "SELECT URL FROM URL_INFO WHERE USER_NAME = '%s' AND INDEX_NAME != 0" % (user_name)
	cursor.execute(qr_sql)
	results = list(cursor.fetchall())
	cursor.execute(qr_sql_)
	results_ = list(cursor.fetchall())
	url_list = []
	for i in range(len(results)):
		url_list.append(results[i][0] + ":::" + results_[i][0])
	print url_list
	return url_list


def main():
	if int(sys.argv[1]) == 1:
		op_MySQLdb(1)
	elif int(sys.argv[1]) == 2:
		op_MySQLdb(2)
	elif int(sys.argv[1]) == 3:
		add_url(sys.argv[2],sys.argv[3])
	elif int(sys.argv[1]) == 4:
		qr_url(sys.argv[2])

if __name__ == '__main__':
	main()