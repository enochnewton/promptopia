"use client";
import { Form } from "@components";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const updatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (promptId) fetchPost();
  }, [promptId]);

  const updatePrompt = async e => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      console.log(post);

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("failed to update the prompt in the frontend");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default updatePrompt;
