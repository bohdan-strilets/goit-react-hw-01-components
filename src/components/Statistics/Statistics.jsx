import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => {
          return (
            <li
              className={s.item}
              key={stat.id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
