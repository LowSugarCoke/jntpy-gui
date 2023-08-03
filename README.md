# Jntpy-Gui
[![banner](https://raw.githubusercontent.com/LowSugarCoke/jntpy-gui/5b74eb608b489b6cf4eada9b19e575f49863bb05/banner/banner.png)](https://github.com/LowSugarCoke/jntpy-gui)

[![python](https://img.shields.io/badge/python-3.10.9-blue)](https://github.com/LowSugarCoke/jntpy-gui) [![nodejs](https://img.shields.io/badge/nodejs-16.20.0-blue)](https://github.com/LowSugarCoke/jntpy-gui) [![Build Status](https://img.shields.io/github/forks/LowSugarCoke/jntpy-gui.svg)](https://github.com/LowSugarCoke/jntpy-gui) [![Build Status](https://img.shields.io/github/stars/LowSugarCoke/jntpy-gui.svg)](https://github.com/LowSugarCoke/jntpy-gui)



Jntpy-Gui is an application with GUI to convert jupyter notebook(.ipynb) to python(.py)

## Install


1. create a Python virtual environment
```
python -m venv jntpy-gui-env
```
2. activate this environment, on Linux or MacOS
```
source jntpy-gui-env/bin/activate
```
or on Windows
```
.\jntpy-gui-env\Scripts\activate
```
3. install the python project dependencies
```
pip install -r requirements.txt
```

4. install javascript project dependencies
```
npm install
```


## Usage

1. Run this script
```
npm start
```

## Deployment in windows
1. Turn on command line and copy the command as below:

```
python -m venv jntpy-gui-env
.\jntpy-gui-env\Scripts\activate
pip install -r requirements.txt
pyinstaller -F --noconsole script.py
move dist\script.exe script.exe
npm install
npm run dist
```

## Contributing

PRs accepted.

## License

This project is licensed under LowSugarCoke