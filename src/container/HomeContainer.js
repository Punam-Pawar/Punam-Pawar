import { connect } from 'react-redux';
import { addToCard,removeToCard } from '../service/Actions/Action';
import Home from '../component/Home'

const mapStateToProps= state=>({
   // data:state.cardItems

})
const mapDispatchToProps= dispatch=>({
addtocardHandler:data=>dispatch(addToCard(data)),
removeToCardHandler:data=>dispatch(removeToCard(data))


})




export default connect(mapStateToProps, mapDispatchToProps)(Home);



//export default Home;