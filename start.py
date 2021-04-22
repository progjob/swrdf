
import frida
import sys
import os 

if __name__ == '__main__':

	path = "./hooks"
	session = frida.get_usb_device().attach("FridaTraceApp")

	for filename in os.listdir(path):
		name, ext = os.path.splitext(filename)

		if (ext == ".js"):
			hook = open(path + os.sep + filename, "r")
			script = session.create_script(hook.read())
			script.load()

	sys.stdin.read()
