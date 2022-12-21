import Axios from 'axios'
const typeCoin = ({coinData}) =>{
    return (
        <div>
            <h1>{coinData.name}</h1>
            <img src={coinData.icon} />
        </div>
    )
}
export const getServerSideProps = async ({params}) =>{
    const id = Number(params.id);
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
   
    return {
       props : {coinData : data.data.coins[id]},
    }
   }

export default typeCoin