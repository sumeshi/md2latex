#!/bin/bash
cd /opt \
&& pandoc src/main.md -f markdown -o dist/main.tex \
&& cp src/template.tex dist \

cd /opt/dist \
&& platex -halt-on-error -interaction=nonstopmode -file-line-error template.tex \
&& dvipdfmx template