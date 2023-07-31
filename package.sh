python -m venv jntpy-gui-env
.\jntpy-gui-env\Scripts\activate
pip install -r requirements.txt
pyinstaller -F --noconsole script.py
mv dist/script.exe /
npm run dist