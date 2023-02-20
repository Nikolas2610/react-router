import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page Not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil consequatur dolores nemo adipisci ducimus voluptatem debitis cum inventore accusamus, voluptate eveniet doloribus officia enim aliquam animi libero. Necessitatibus, eveniet?</p>

        <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  )
}
