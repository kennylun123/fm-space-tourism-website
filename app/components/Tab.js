import styles from "./tab.module.css";

export function Tab({ id, className, items, index, setIndex }) {
  return (
    <div id={id} className={className}>
      {items.map((item, n) => (
        <button
          key={n}
          className={`${styles.tabLinks} ${
            index === n ? styles.tabLinkActive : ""
          }`}
          onClick={() => setIndex(n)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function TabUnordered({ id, className, items, index, setIndex }) {
  return (
    <div id={id} className={className}>
      {items.map((item, n) => (
        <button
          key={n}
          className={`${styles.tabUnorderedLinks} ${
            index === n ? styles.tabUnorderedLinkActive : ""
          }`}
          onClick={() => setIndex(n)}
        >
          <span className="srOnly">{item}</span>
        </button>
      ))}
    </div>
  );
}

export function TabOrdered({ id, className, items, index, setIndex }) {
  return (
    <div id={id} className={className}>
      {items.map((item, n) => (
        <button
          key={n}
          className={`${styles.tabOrderedLinks} ${
            index === n ? styles.tabOrderedLinkActive : ""
          }`}
          onClick={() => setIndex(n)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
