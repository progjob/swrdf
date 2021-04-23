
import frida
import sys
import os 
from optparse import OptionParser

if __name__ == '__main__':

	parser = OptionParser()
	parser.add_option("-U", "--use", default = False, action = "store_true")

	hooks_path = "./hooks"
	app_to_attach = "FridaTraceApp"

	(options, args) = parser.parse_args()
	if (options.use):
		app_to_attach = str(args[0])

	session = frida.get_usb_device().attach(app_to_attach)

	for filename in os.listdir(hooks_path):
		name, ext = os.path.splitext(filename)

		if (ext == ".js"):
			hook = open(hooks_path + os.sep + filename, "r")
			script = session.create_script(hook.read())
			script.load()

	sys.stdin.read()
