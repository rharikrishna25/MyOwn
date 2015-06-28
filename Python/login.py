from tkinter import *
from tkinter import messagebox
import os

def onLogin():
	if(usrName.get() == 'hari' and password.get() == 'hari'):
		print('logged in')
		os.system('first.py')

root = Tk()

label_username = Label(root,text='User Name')
label_password = Label(root,text='Password')

usrName = Entry(root)
password = Entry(root)


label_username.grid(row=0)
label_password.grid(row=1)

usrName.grid(row=0,column=1)
password.grid(row=1,column=1)


loginBut = Button(root,text='Login',command=onLogin)
loginBut.grid(columnspan=2)

root.mainloop()