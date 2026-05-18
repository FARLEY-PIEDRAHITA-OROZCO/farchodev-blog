import groq from "groq"
import { client } from "@/lib/sanity"

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readingTime,
  coverImage,
  "categories": categories[]->{title, slug},
  "tags": tags[]->{name, slug},
  "author": author->{name, image}
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  readingTime,
  coverImage,
  "categories": categories[]->{title, slug},
  "tags": tags[]->{name, slug},
  "author": author->{name, image, bio}
}`

export const categoriesQuery = groq`*[_type == "category"]{title, slug, description}`

export const tagsQuery = groq`*[_type == "tag"]{name, slug}`

export const postsByCategoryQuery = groq`*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc){
  _id, title, slug, excerpt, publishedAt, readingTime, coverImage,
  "categories": categories[]->{title, slug},
  "tags": tags[]->{name, slug}
}`

export const postsByTagQuery = groq`*[_type == "post" && $slug in tags[]->slug.current] | order(publishedAt desc){
  _id, title, slug, excerpt, publishedAt, readingTime, coverImage,
  "categories": categories[]->{title, slug},
  "tags": tags[]->{name, slug}
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`

export async function getPosts() {
  return client.fetch(postsQuery)
}

export async function getPost(slug: string) {
  return client.fetch(postQuery, { slug })
}

export async function getCategories() {
  return client.fetch(categoriesQuery)
}

export async function getTags() {
  return client.fetch(tagsQuery)
}

export async function getPostsByCategory(slug: string) {
  return client.fetch(postsByCategoryQuery, { slug })
}

export async function getPostsByTag(slug: string) {
  return client.fetch(postsByTagQuery, { slug })
}

export async function getPostSlugs() {
  return client.fetch(postSlugsQuery)
}
