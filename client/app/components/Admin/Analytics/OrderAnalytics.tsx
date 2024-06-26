import React, { FC } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Label, YAxis, LabelList, AreaChart, Area, Tooltip, LineChart, CartesianGrid, Legend, Line } from "recharts"
import Loader from "../../Loader/loader";
import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";

// const analyticsData = [
//     { name: 'Page A', count: 400 },
//     { name: 'Page B', count: 8200 },
//     { name: 'Page C', count: 4033 },
//     { name: 'Page D', count: 450 },
//     { name: 'page E', count: 3454 },
//     { name: 'Page F', count: 356 },
//     { name: 'Page G', count: 6542 }
// ];

type Props = {
    isDashboard?: boolean
}
const OrderAnalytics: FC<Props> = ({ isDashboard }) => {
    const { data, isLoading } = useGetOrdersAnalyticsQuery({})

    const analyticsData: any = []
    data && data.orders.last12Months.forEach((item: any) => {
        analyticsData.push({ name: item.name, count: item.count })
    })
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div className={isDashboard ? 'h-[30vh]' : ""}>
                        <div className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}>
                            <h1 className={`${styles.title} ${isDashboard && '!text-[20px]'} px-5 !text-start`}>
                                Orders Analytics
                            </h1>
                            {
                                !isDashboard && (
                                    <p className={`${styles.label} px-5`}>
                                        Last 12 months analytics data {" "}
                                    </p>
                                )
                            }
                        </div>
                        <div className={`w-full ${isDashboard ? 'h-[30vh]' : "h-screen"} flex items-center justify-center`}>
                            <ResponsiveContainer width={isDashboard ? '100%' : '90%'} height={isDashboard ? "100%" : '70%'}>
                                <LineChart width={500} height={300} data={analyticsData} margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    {isDashboard && <Legend />}
                                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default OrderAnalytics