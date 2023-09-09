find . -type d -name ".venv" -prune -o -type d -name "migrations" -exec rm -r {} \; -o -type f -name "*.py[co]" -exec rm {} \;
