import nbformat
import sys

# Read the input from standard input
notebook_content = sys.stdin.read()

try:
    # Try to parse the input as a Jupyter notebook
    notebook = nbformat.reads(notebook_content, as_version=4)
except nbformat.reader.NotJSONError:
    # If the input cannot be parsed as a valid Jupyter notebook, print a warning and exit
    print("Warning: The provided input is not a valid Jupyter Notebook.")
    sys.exit(1)

# Iterate over each cell in the notebook
for cell in notebook.cells:
    # If the cell is a code cell, print its source code
    if cell.cell_type == 'code':
        print(cell.source)
