// src/components/site/product-showcase/showcase.data.ts
// Toàn bộ dữ liệu trong file này là DỮ LIỆU MINH HỌA (synthetic). Không dùng cho mục đích khác.

export type CategoryId = "dashboard" | "automation" | "crm";

export interface ShowcaseCategory {
  id: CategoryId;
  tabLabel: string;        // nhãn đầy đủ (desktop)
  shortLabel: string;      // nhãn rút gọn (mobile)
  description: string;
  icon: "grid" | "bolt" | "users";
  windowTitle: string;
  capabilities: readonly [string, string, string];
}

export type Tone = "ok" | "warn" | "bad" | "info" | "mute";

/* ---------- Dashboard ---------- */
export interface RevenuePoint { month: string; revenue: number; plan: number } // đơn vị: triệu đồng (giả định)
export interface Kpi { id: "rev" | "proj" | "late" | "req"; label: string; value?: string; spark: readonly number[] }
export interface TaskBucket { id: "done" | "doing" | "todo" | "late"; label: string; count: number; color: string }
export interface Project {
  id: string; name: string; code: string; owner: string;
  progress: number; status: Extract<Tone, "ok" | "warn" | "bad">; statusLabel: string; due: string;
}

/* ---------- Automation ---------- */
export type SourceId = "form" | "email" | "csv";
export type WorkflowStageId = "input" | "ai" | "integrate" | "monitor";
export type NodeStatus = "idle" | "running" | "waiting" | "retrying" | "done" | "rejected";
export interface WorkflowSource {
  label: string;
  record: ReadonlyArray<readonly [label: string, value: string]>;
  classification: string; priority: "Cao" | "Trung bình" | "Thấp"; summary: string;
}
export interface WorkflowStage { id: WorkflowStageId; step: string; title: string; subtitle: string; icon: "inbox" | "spark" | "link" | "activity" }
export interface RunRecord { id: string; label: string; time: string; tone: Extract<Tone, "ok" | "warn" | "bad">; text: string }
export interface LogEntry { time: string; text: string; tone?: Extract<Tone, "ok" | "warn" | "bad"> }

/* ---------- CRM ---------- */
export type CrmStageId = "lead" | "contacted" | "proposal" | "negotiation" | "won";
export interface CrmStage { id: CrmStageId; name: string }
export interface Owner { id: string; name: string }
export interface Deal {
  id: string; company: string; title: string;
  value: number;            // triệu đồng (giả định)
  stage: CrmStageId; owner: string; source: "Website" | "Giới thiệu" | "Sự kiện";
  next: string; log: ReadonlyArray<readonly [when: string, text: string]>;
}

export const CATEGORIES: readonly ShowcaseCategory[] = [
  { id: "dashboard", tabLabel: "Quản trị doanh nghiệp", shortLabel: "Dashboard", description: "KPI, doanh thu, dự án và công việc", icon: "grid", windowTitle: "VEX Dashboard · bản minh họa",
    capabilities: ["Theo dõi KPI, doanh thu và tiến độ trên một màn hình.", "Biểu đồ tương tác: chọn từng tháng để xem chi tiết.", "Có thể phân quyền để mỗi vai trò chỉ thấy dữ liệu phù hợp."] },
  { id: "automation", tabLabel: "Tự động hóa AI", shortLabel: "Tự động hóa AI", description: "Luồng từ tiếp nhận đến giám sát", icon: "bolt", windowTitle: "VEX Automation · bản minh họa",
    capabilities: ["Luồng xử lý rõ ràng từ tiếp nhận đến giám sát.", "Người xác nhận ở các bước quan trọng, AI chỉ đề xuất.", "Thử lại có kiểm soát và khóa chống xử lý trùng."] },
  { id: "crm", tabLabel: "CRM & Bán hàng", shortLabel: "CRM & Bán hàng", description: "Pipeline cơ hội theo giai đoạn", icon: "users", windowTitle: "VEX CRM · bản minh họa",
    capabilities: ["Pipeline theo giai đoạn, số liệu cập nhật ngay khi thay đổi.", "Chi tiết cơ hội, lịch sử trao đổi và bước tiếp theo.", "Lọc theo người phụ trách và tìm kiếm nhanh."] },
];

const REV = [820, 910, 880, 1040, 1100, 1020, 1180, 1250, 1210, 1330, 1290, 1420];
const PLAN = [900, 920, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
export const REVENUE_SERIES: readonly RevenuePoint[] = REV.map((revenue, i) => ({ month: `T${i + 1}`, revenue, plan: PLAN[i] }));
export const REVENUE_AXIS = { max: 1600, ticks: [0, 400, 800, 1200, 1600] } as const;

export const KPIS: readonly Kpi[] = [
  { id: "rev", label: "Doanh thu tháng (giả định)", spark: [52, 57, 55, 65, 69, 64, 74, 78, 76, 83, 81, 89] },
  { id: "proj", label: "Dự án đang chạy", value: "12", spark: [8, 9, 9, 10, 11, 11, 12, 12, 11, 12, 12, 12] },
  { id: "late", label: "Công việc quá hạn", value: "5", spark: [9, 8, 8, 7, 8, 6, 7, 6, 6, 5, 6, 5] },
  { id: "req", label: "Yêu cầu mới trong tuần", value: "37", spark: [20, 26, 24, 30, 28, 33, 31, 35, 34, 38, 36, 37] },
];
export const TASK_BUCKETS: readonly TaskBucket[] = [
  { id: "done", label: "Hoàn thành", count: 48, color: "#0754C3" },
  { id: "doing", label: "Đang thực hiện", count: 21, color: "#1597EF" },
  { id: "todo", label: "Chờ xử lý", count: 14, color: "#9FD3F6" },
  { id: "late", label: "Quá hạn", count: 5, color: "#D6453D" },
];
export const PROJECTS: readonly Project[] = [
  { id: "p1", name: "Cổng thông tin nội bộ", code: "Dự án mẫu 01", owner: "A", progress: 72, status: "ok", statusLabel: "Đúng tiến độ", due: "15/12" },
  { id: "p2", name: "Tự động hóa đối soát đơn hàng", code: "Dự án mẫu 02", owner: "B", progress: 45, status: "warn", statusLabel: "Cần chú ý", due: "28/12" },
  { id: "p3", name: "Ứng dụng quản lý kho", code: "Dự án mẫu 03", owner: "C", progress: 88, status: "ok", statusLabel: "Đúng tiến độ", due: "05/12" },
  { id: "p4", name: "Dashboard báo cáo điều hành", code: "Dự án mẫu 04", owner: "A", progress: 20, status: "bad", statusLabel: "Chậm", due: "20/01" },
];

export const WORKFLOW_SOURCES: Record<SourceId, WorkflowSource> = {
  form: { label: "Biểu mẫu web", record: [["Mã yêu cầu", "DEMO-0412"], ["Kênh", "Biểu mẫu web"], ["Người gửi", "Khách hàng mẫu"], ["Nội dung", "Cần báo giá hệ thống quản lý kho cho 2 chi nhánh."]], classification: "Yêu cầu báo giá", priority: "Cao", summary: "Báo giá phần mềm quản lý kho, 2 chi nhánh." },
  email: { label: "Email", record: [["Mã yêu cầu", "DEMO-0412"], ["Kênh", "Email"], ["Người gửi", "Khách hàng mẫu"], ["Nội dung", "Muốn kết nối phần mềm kế toán với hệ thống bán hàng hiện có."]], classification: "Tư vấn tích hợp", priority: "Trung bình", summary: "Kết nối phần mềm kế toán với hệ thống bán hàng." },
  csv: { label: "Tệp CSV", record: [["Mã yêu cầu", "DEMO-0412"], ["Kênh", "Tệp CSV"], ["Người gửi", "Bộ phận vận hành mẫu"], ["Nội dung", "Tệp gồm 120 dòng đơn hàng mẫu cần đối soát."]], classification: "Đối soát dữ liệu", priority: "Thấp", summary: "Đối soát 120 dòng đơn hàng mẫu." },
};
export const WORKFLOW_STAGES: readonly WorkflowStage[] = [
  { id: "input", step: "Bước 1", title: "Tiếp nhận dữ liệu", subtitle: "Biểu mẫu, email, tệp", icon: "inbox" },
  { id: "ai", step: "Bước 2", title: "Xử lý bằng AI", subtitle: "Phân loại và tóm tắt", icon: "spark" },
  { id: "integrate", step: "Bước 3", title: "Tích hợp hệ thống", subtitle: "Ghi dữ liệu, gửi thông báo", icon: "link" },
  { id: "monitor", step: "Bước 4", title: "Giám sát", subtitle: "Nhật ký và lịch sử chạy", icon: "activity" },
];
export const SEED_RUNS: readonly RunRecord[] = [
  { id: "r1", label: "Lượt chạy mẫu #3", time: "09:12", tone: "ok", text: "Thành công" },
  { id: "r2", label: "Lượt chạy mẫu #2", time: "08:47", tone: "warn", text: "Thử lại 1 lần" },
  { id: "r3", label: "Lượt chạy mẫu #1", time: "08:20", tone: "ok", text: "Thành công" },
];

export const CRM_STAGES: readonly CrmStage[] = [
  { id: "lead", name: "Tiềm năng" }, { id: "contacted", name: "Đã liên hệ" }, { id: "proposal", name: "Đề xuất" },
  { id: "negotiation", name: "Đàm phán" }, { id: "won", name: "Chốt (mẫu)" },
];
export const OWNERS: readonly Owner[] = [{ id: "A", name: "Nhân viên A" }, { id: "B", name: "Nhân viên B" }, { id: "C", name: "Nhân viên C" }];
export const DEALS: readonly Deal[] = [
  { id: "d1", company: "Doanh nghiệp mẫu A", title: "Cổng khách hàng nội bộ", value: 180, stage: "lead", owner: "A", source: "Website", next: "Thứ Ba · Gọi tìm hiểu nhu cầu", log: [["Hôm nay", "Nhận yêu cầu từ biểu mẫu website"]] },
  { id: "d2", company: "Doanh nghiệp mẫu B", title: "Tự động hóa đối soát đơn", value: 240, stage: "lead", owner: "B", source: "Giới thiệu", next: "Thứ Tư · Gửi câu hỏi khảo sát", log: [["Hôm qua", "Được giới thiệu qua đối tác"]] },
  { id: "d3", company: "Doanh nghiệp mẫu C", title: "Dashboard điều hành", value: 150, stage: "contacted", owner: "A", source: "Sự kiện", next: "Thứ Năm · Hẹn demo 30 phút", log: [["2 ngày trước", "Trao đổi qua điện thoại"], ["4 ngày trước", "Gặp tại sự kiện"]] },
  { id: "d4", company: "Doanh nghiệp mẫu D", title: "Ứng dụng quản lý kho", value: 320, stage: "contacted", owner: "C", source: "Website", next: "Thứ Sáu · Gửi tài liệu giới thiệu", log: [["Hôm qua", "Gửi email giới thiệu"]] },
  { id: "d5", company: "Doanh nghiệp mẫu E", title: "Tích hợp kế toán và bán hàng", value: 410, stage: "proposal", owner: "B", source: "Giới thiệu", next: "Thứ Hai · Trình bày đề xuất", log: [["Hôm nay", "Hoàn thiện bản đề xuất"], ["3 ngày trước", "Khảo sát quy trình"]] },
  { id: "d6", company: "Doanh nghiệp mẫu F", title: "Hệ thống chăm sóc khách hàng", value: 280, stage: "proposal", owner: "A", source: "Website", next: "Thứ Ba · Chờ phản hồi đề xuất", log: [["Hôm qua", "Gửi đề xuất"]] },
  { id: "d7", company: "Doanh nghiệp mẫu G", title: "Cổng đại lý", value: 520, stage: "negotiation", owner: "C", source: "Sự kiện", next: "Thứ Tư · Thống nhất phạm vi", log: [["Hôm nay", "Thảo luận phạm vi giai đoạn 1"]] },
  { id: "d8", company: "Doanh nghiệp mẫu H", title: "Báo cáo vận hành tự động", value: 195, stage: "won", owner: "B", source: "Giới thiệu", next: "Bắt đầu khảo sát chi tiết", log: [["Hôm qua", "Đã chốt phạm vi (mẫu)"]] },
];
