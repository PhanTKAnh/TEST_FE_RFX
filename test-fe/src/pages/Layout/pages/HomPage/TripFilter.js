import iconPosition from '../../../../assets/imgs/icon-position-blue.png';
import iconMoto from '../../../../assets/imgs/icon-moto.png';
import iconClock from '../../../../assets/imgs/icon-oclock-blue.png';
import iconMoney from '../../../../assets/imgs/icon-money.png';

export default function TripFilter() {
  return (
    <div className="trip-filter">

      <div className="filter-item">
        <img src={iconPosition} alt="destination" />
        <select>
          <option value="">Destination</option>
          <option value="hanoi">Ha Noi</option>
          <option value="danang">Da Nang</option>
          <option value="hochiminh">Ho Chi Minh</option>
        </select>
      </div>

      <div className="filter-item">
        <img src={iconMoto} alt="activity" className="filter-icon" />
        <select>
          <option value="">Activity</option>
          <option value="motorbike">Motorbike</option>
          <option value="hiking">Hiking</option>
          <option value="camping">Camping</option>
          <option value="sightseeing">Sightseeing</option>
        </select>
      </div>

      <div className="filter-item">
        <img src={iconClock} alt="duration" />
        <select>
          <option value="">0 Days - 6 Days</option>
          <option value="1-3">1 - 3 Days</option>
          <option value="4-6">4 - 6 Days</option>
          <option value="7+">7 Days+</option>
        </select>
      </div>

      <div className="filter-item">
        <img src={iconMoney} alt="price" />
        <select>
          <option value="">$200 - $580</option>
          <option value="200-300">$200 - $300</option>
          <option value="301-400">$301 - $400</option>
          <option value="401-580">$401 - $580</option>
        </select>
      </div>

      <button className="search-button">Search</button>
    </div>
  );
}
