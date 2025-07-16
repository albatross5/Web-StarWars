import "./Search.scss";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-card">
          <div className="search-grid">
            <div className="form-group">
              <label>{t("search_destination_label")}</label>
              <input type="text" placeholder={t("search_placeholder")} />
            </div>
            <div className="form-group">
              <label>{t("search_departure_date_label")}</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>{t("search_return_date_label")}</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>{t("search_travelers_label")}</label>
              <button className="btn btn-primary">
                {t("search_button_label")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
