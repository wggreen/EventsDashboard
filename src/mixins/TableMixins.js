
import { format } from "date-fns";

export const dateMixin = {
    methods: {
        formatDate(dateString) {
            return format(new Date(dateString), "MMM dd");
        }
    }
};

export const priceRangeMixin = {
    methods: {
        formatPrices(min, max) {
            if (!min || !max) {
                return "Unknown";
            }
            return `$${min} - $${max}`;
        }
    }
};