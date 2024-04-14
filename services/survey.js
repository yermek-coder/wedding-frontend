import api from "~/services/api";

export class Survey {
    getSurveyResults() {
        return api.get("survey/results");
    }

    addSurveyResult(result) {
        return api.post("survey", result);
    }

    editSurveyResult(result) {
        return api.put("survey", result);
    }

    removeSurveyResult(result) {
        return api.remove(`survey/${result._id}`);
    }
}

export default new Survey();
