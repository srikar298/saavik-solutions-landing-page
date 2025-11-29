import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/getPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogs = posts.map((post) => ({
    url: `https://saaviksolutions.com/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://saaviksolutions.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://saaviksolutions.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saaviksolutions.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saaviksolutions.com/careers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saaviksolutions.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://saaviksolutions.com/contact-us',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...blogs,
  ]
}