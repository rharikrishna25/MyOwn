from tkinter import *
from tkinter import messagebox
from tkinter import ttk

def answer():
	messagebox.showinfo( "Hello Python", "Hello World")

root = Tk()
root.title('learn python')

btn = Button(root,text='Click',command=answer)
btn.grid(columnspan=2)

root.mainloop()

