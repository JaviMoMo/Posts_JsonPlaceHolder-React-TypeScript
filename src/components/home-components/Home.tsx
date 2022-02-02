import { CardList } from './CardList';
import "./Home.scss";

const Home = () => {
    
    return (
        <div className='home-contain'>
            <div className='home-text-contain'>
                <p>To be able to edit or delete the posts, <b>please login here</b>:</p>
                <p>🡳🡳🡳</p>
            </div>
            <div className='home-cardList-contain'>
                <CardList />
            </div>
        </div>
    )
}

export default Home
