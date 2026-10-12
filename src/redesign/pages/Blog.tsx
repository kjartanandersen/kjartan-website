import React, { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";

// Define the Blog Post type structure

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
}
import { supabase } from "./supabaseClient";

import "./ContentPage.css";

const Blog: React.FC = () => {
  const [hasPosts, setHasPosts] = useState<boolean>(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      // Null when the build had no Supabase credentials; the placeholder below
      // is the right thing to show in that case.
      if (!supabase) return;

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("id, title, slug, content, created_at")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Cast data to your explicit TypeScript interface.
        // An empty table comes back as [], which is truthy — check the length
        // so the placeholder stays up when there is nothing to show.
        if (data) {
          setPosts(data as BlogPost[]);
          setHasPosts(data.length > 0);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching blog posts:", error.message);
        }
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <title>Blog</title>
      <ApprovedPageBase pullUp={false}>
        <div className="contentPage">
          <div className="pageHeader">
            <h1>Blog</h1>
            <Link to="/approved" className="backLink">
              &lt; Back
            </Link>
          </div>
          {posts.map((post) => (
            <div>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))}
          {!hasPosts && (
            <p className="placeholder">
              Transmission pending... No entries have been logged yet. Check
              back soon.
            </p>
          )}
        </div>
      </ApprovedPageBase>
    </>
  );
};

export default Blog;
