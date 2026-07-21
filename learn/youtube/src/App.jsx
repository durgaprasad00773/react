import React from 'react'
import Card from './components/Card.jsx'
import './index.css'

const features = [
  {
    title: "Dynamic Programming",
    image: "https://picsum.photos/seed/dp/400/250",
    description: "Master memoization, tabulation, and optimization techniques with curated problems."
  },
  {
    title: "Graphs",
    image: "https://picsum.photos/seed/graphs/400/250",
    description: "Practice BFS, DFS, shortest paths, MST, and advanced graph algorithms."
  },
  {
    title: "Binary Trees",
    image: "https://picsum.photos/seed/trees/400/250",
    description: "Learn traversals, BSTs, LCA, serialization, and tree-based interview questions."
  },
  {
    title: "Arrays & Strings",
    image: "https://picsum.photos/seed/arrays/400/250",
    description: "Strengthen your fundamentals with two pointers, sliding window, and hashing patterns."
  },
  {
    title: "Linked Lists",
    image: "https://picsum.photos/seed/linkedlist/400/250",
    description: "Solve problems involving reversal, cycle detection, merging, and pointer manipulation."
  },
  {
    title: "Stacks & Queues",
    image: "https://picsum.photos/seed/stacks/400/250",
    description: "Understand monotonic stacks, queues, expression evaluation, and scheduling problems."
  },
  {
    title: "Contest Tracker",
    image: "https://picsum.photos/seed/contest/400/250",
    description: "Stay updated with coding contests and monitor your participation history."
  },
  {
    title: "Interview Experiences",
    image: "https://picsum.photos/seed/interview/400/250",
    description: "Read real interview experiences from top product-based and fintech companies."
  },
  {
    title: "Progress Dashboard",
    image: "https://picsum.photos/seed/dashboard/400/250",
    description: "Track solved problems, streaks, topic-wise progress, and overall consistency."
  },
  {
    title: "Notes & Revision",
    image: "https://picsum.photos/seed/notes/400/250",
    description: "Organize your personal notes, revision plans, and important interview concepts."
  }
];

const App = () => {
  return (
    <div className='container'>
      {
        features.map((feature, index) => {
          return (
            <div key={index} className="card-container">
              <Card
                title={feature.title}
                image={feature.image}
                description={feature.description}
              />
            </div>
          )
        })
      }
    </div>

  )
}

export default App