import { useDispatch, useSelector } from "react-redux";
import "./ChooseBackground.scss";
import { imgArr } from "./imgArr";
import { changeBg } from "../../redux/backgroundSlice";
import { RootState } from "../../types/rootState";

export default function ChooseBackground() {
  const dispatch = useDispatch();
  const bgImg = useSelector((state: RootState )=> state.reducer.background );

  function handleClickBg (img: string) {
    dispatch(changeBg(img))
  }

  return (
    <ul className="chooseBackground__list">
      {imgArr.map((img, index) => (
        <li className="chooseBackground__item" key={index} onClick={()=>handleClickBg(img)}>
          <img src={img} alt="background" className={`chooseBackground__img ${bgImg === img ? 'chooseBackground__img--border' : ''}`} />
        </li>
      ))}
    </ul>
  );
}
