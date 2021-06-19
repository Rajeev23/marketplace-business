import React from "react";
import { Container } from "reactstrap";
// import BlogComment from '../../component/blog/commnet';
function BlogPost(props) {
  return (
    <div>
      <Container >
        <div className="blog-box">
        <h1 style={{ color: '#00B5F3' }}>{props.blog.title}</h1>
        <p style={{ color: '#00B5F3' }}>Author : {props.blog.author}  </p>
        <p cstyle={{ color: '#00B5F3'}}>Date : {props.blog.date}</p>
        <section 
                          dangerouslySetInnerHTML={{ __html: props.blog.content }}
        ></section>
        
        {/* <BlogComment/> */}
        </div>
      </Container>
      <style jsx global>{`
         .blog-box{
          // background-color: rgb(245, 245, 245);
          font-weight: 400;
          // margin-top: 15px;
          border-width: 1px;
          // border-style: solid;
          border: 1px solid #ccc;
          border-image: initial;
          border-radius: 4px;
          padding: 1rem;
         }
      `}</style>
    </div>
  );
}

// for the bolog post compnent
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug;
  const path = `${process.cwd()}/contents/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

// generate HTML 
export async function getStaticPaths(context) {
  const fs = require("fs");

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPost;
