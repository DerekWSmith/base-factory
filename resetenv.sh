deactivate
rm -rf .venv
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install --no-cache-dir -r requirements.txt
