import "./posts.css"
import Post from "../post/Post"

const posts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }
]

export default function Posts() {
  return (
    <div className="posts">
      {
        posts.map( (post) => (
          <Post post={post} key={post.id}/>
        ))
      }
   
    </div>
  )
}
