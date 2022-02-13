import PropTypes from "prop-types";
import s from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string,
};
