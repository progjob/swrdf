
import frida
import sys
import os
from optparse import OptionParser

if __name__ == '__main__':

  parser = OptionParser()
  parser.add_option("-U", "--use", default = False, action = "store_true")
  parser.add_option("-H", "--host", default = False, action = "store_true")
  
  (options, args) = parser.parse_args()


  device = 0
  hooks_path = "./hooks"
  app_to_attach = "FridaTraceApp"

  #frida-server -l 0.0.0.0
  if (options.host):
    mgr = frida.get_device_manager()
    device = mgr.add_remote_device("192.168.1.61")
  else:
    device = frida.get_usb_device()


  if (options.use):
    app_to_attach = str(args[0])


  session = device.attach(app_to_attach)


  for filename in os.listdir(hooks_path):
    name, ext = os.path.splitext(filename)

    if (ext == ".js"):
      hook = open(hooks_path + os.sep + filename, "r")
      script = session.create_script(hook.read())
      script.load()

  sys.stdin.read()
