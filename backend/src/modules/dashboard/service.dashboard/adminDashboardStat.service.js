import { CountBrantDasboard } from "../../brand/service.brand/countBrandMonth.service.js";
import { CountRestaurantDasboard } from "../../restaurant/service.restaurant/countRestaurantMonth.service.js";
import { countUpgradeRequestPendingService } from "../../user/service/countUpgradeRequestPending_service.js";
export const AdminDashboardService = async () => {
  const [totalBrands, totalRestaurants, pendingRequests] = await Promise.all([
    CountBrantDasboard({ isActive: "ACTIVE" }),
    CountRestaurantDasboard(),
    {

      value:await countUpgradeRequestPendingService(),
      trendPercentage: "",
      trendType: "",
      trendLabel: ""
    },
  ])

  return {
    totalBrands: totalBrands,
    totalRestaurants: totalRestaurants,
    pendingRequests: pendingRequests
  }
}