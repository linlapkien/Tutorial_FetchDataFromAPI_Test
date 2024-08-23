import style from '@/styles/GridHomePage.module.css';

const Component1 = () => {
  return (
    <div className={style.text_color_component1}>
      <a target="_blank" rel="noopener noreferrer">
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and&nbsp;API.</p>
      </a>
    </div>
  );
};

export default Component1;
