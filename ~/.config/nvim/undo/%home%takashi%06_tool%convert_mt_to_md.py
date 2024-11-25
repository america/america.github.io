Vim�UnDo� ,�?���d�)F�Lm�����{���ٔ<�   F                                  gA�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             gA�     �              ;   	import os   	import re       /# 入力ファイルと出力ディレクトリ   input_file = 'mt_export.txt'   output_dir = './output'   &os.makedirs(output_dir, exist_ok=True)       5# ファイル名に使用できない文字を置換   def sanitize_filename(title):   -    return re.sub(r'[\/:*?"<>|]', '_', title)       # MT形式を読み込み   5with open(input_file, 'r', encoding='utf-8') as file:       lines = file.readlines()       
entry = []   in_entry = False       for line in lines:        if line.startswith("-----"):           # 記事終了           if in_entry:               title = None               date = None               categories = []               content = []                              for e in entry:   *                if e.startswith("TITLE:"):   5                    title = e[len("TITLE:"):].strip()   +                elif e.startswith("DATE:"):   3                    date = e[len("DATE:"):].strip()   /                elif e.startswith("CATEGORY:"):   C                    categories.append(e[len("CATEGORY:"):].strip())                   else:   %                    content.append(e)                  (            # Markdownファイル作成               if title and date:   :                sanitized_title = sanitize_filename(title)   2                filename = f"{sanitized_title}.md"   =                filepath = os.path.join(output_dir, filename)   @                with open(filepath, 'w', encoding='utf-8') as f:   $                    f.write("---\n")   4                    f.write(f"title: \"{title}\"\n")   .                    f.write(f"date: {date}\n")   ,                    f.write("categories:\n")   /                    for category in categories:   4                        f.write(f"  - {category}\n")   ,                    f.write("draft: true\n")   &                    f.write("---\n\n")   -                    f.write("".join(content))                              entry = []           in_entry = not in_entry       elif in_entry:           entry.append(line)    5��            ;                      b             5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             gA�    �                   �               5��                    E                       (	      5��