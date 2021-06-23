import jinja2

def my_render_jinja_html(template_loc,file_name, **context):

    return jinja2.Environment(
        loader=jinja2.FileSystemLoader(template_loc+'/')
    ).get_template(file_name).render(context)

def main():
    filename = input("Enter name of output file: ")
    filepath = "articles/" + filename + ".html"

    article = open("content.txt", "r").read()

    html_file = my_render_jinja_html("app", "template.html", content=article)
    with open(filepath, 'w+') as f_out:
        print(html_file, file=f_out)


if __name__ == "__main__": main()