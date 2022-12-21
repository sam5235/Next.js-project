import { useRouter } from "next/router"
function profile() {
    const router = useRouter();
    const {username} = router.query
  return (
    <div>
       <h3>Hello {username} !</h3>
    </div>
  )
}

export default profile
