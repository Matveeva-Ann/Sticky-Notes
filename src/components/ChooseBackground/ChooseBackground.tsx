import { useDispatch } from "react-redux";
import "./ChooseBackground.scss";
import { imgArr } from "./imgArr";
import { changeBg } from "../../redux/backgroundSlice";

export default function ChooseBackground() {
  const dispatch = useDispatch()


  function handleClickBg (img: string) {
    console.log(img);
    
    dispatch(changeBg(img))
  }
  return (
    <ul className="chooseBackground__list">
      {imgArr.map((img, index) => (
        <li className="chooseBackground__item" key={index} onClick={()=>handleClickBg(img)}>
          <img src={img} alt="background" className="chooseBackground__img"/>
        </li>
      ))}
    </ul>
  );
}
