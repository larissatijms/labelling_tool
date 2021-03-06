"""
	This script generates `main.js` from `main_template.js`.
	It loads all image paths using jinja2.

	Run:
	$ python3 generate_javascript.py
"""

from jinja2 import Template
from shutil import copyfile
import glob
import time
import json


def get_style_version(dir_path):

	considered_files = glob.glob(dir_path)
	considered_files = list(filter(lambda x : len(x.split('.'))==3, 
								   considered_files))

	fn = lambda x: int(x.split('.')[1])
	files = sorted(considered_files, key=fn)
	
	for f in files:

		first_part = f.split('.')[0].split('/')[-1]
		ext = f.split('.')[-1]

		if first_part == 'main'\
			and ext == 'js':
			
			version = f.split('.')[1]

	return int(version)


def load_labels(labels_filename):

	with open(labels_filename, 'r') as f:
		labels_dict = json.load(f)

	return labels_dict


def generate_js(main_js_path, new_version, images_dir, labels_filename):

	html_index_path = 'static/scripts/js/main.{}.js'.format(new_version)

	with open(main_js_path, 'r') as f:
	    html_template = f.read()

	template = Template(html_template)
	images = sorted(glob.glob(images_dir))

	labels = load_labels(labels_filename)
	labels['images'] = images

	with open(html_index_path, "w") as f:
	    f.write(template.render(config=labels))

	print('{} HTML was generated from template'.format(html_index_path))

def generate_css(main_css, new_version):

	main_css_new_version = 'static/scripts/css/style.{}.css'.format(new_version)
	copyfile(main_css, main_css_new_version)


def main():
	main_js_path = 'static/scripts/js/main_template.js'
	main_css = 'static/scripts/css/style.css'
	images_dir = 'static/notes_photos/*'
	labels_filename = 'labels.json'

	new_version_num = get_style_version('static/scripts/js/*')+1

	generate_js(main_js_path, new_version_num, images_dir, labels_filename)
	generate_css(main_css, new_version_num)


if __name__ == "__main__":
	main()