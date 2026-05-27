import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  ShieldCheck,
  Sparkles,
  User,
  UserCog,
} from "lucide-react";

const loginMethods = [
  {
    label: "教育局單一登入",
    icon: Building2,
  },
  {
    label: "教師登入",
    icon: GraduationCap,
  },
  {
    label: "管理員登入",
    icon: UserCog,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};

    if (!account.trim()) {
      nextErrors.account = "請輸入帳號";
    }

    if (!password.trim()) {
      nextErrors.password = "請輸入密碼";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1200);
    });

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.10),rgba(255,255,255,0)_34%),linear-gradient(240deg,rgba(37,99,235,0.12),rgba(255,255,255,0)_38%)]" />
        <div className="absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(135deg,rgba(59,130,246,0.10)_1px,transparent_1px),linear-gradient(45deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px,112px_112px]" />
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-60"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <path
            d="M928 0L1440 0L1440 358L1210 286L1038 372L888 232L928 0Z"
            fill="rgba(219,234,254,0.72)"
          />
          <path
            d="M0 612L214 538L402 622L590 560L738 704L582 900L0 900Z"
            fill="rgba(224,242,254,0.58)"
          />
          <path
            d="M760 110L918 192L842 348L666 308L622 154L760 110Z"
            fill="none"
            stroke="rgba(37,99,235,0.16)"
            strokeWidth="2"
          />
          <path
            d="M1088 566L1284 624L1222 790L1026 766L972 626L1088 566Z"
            fill="none"
            stroke="rgba(14,165,233,0.18)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-8 sm:px-8 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10">
        <motion.div
          className="w-full max-w-2xl text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 shadow-sm shadow-blue-100/70 backdrop-blur-xl lg:mx-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 text-white shadow-lg shadow-blue-500/25">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-xl font-bold tracking-normal text-blue-950">
                EyeEP
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
                Special Education AI
              </p>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-blue-950 sm:text-5xl lg:text-6xl">
              智慧化 IEP 撰寫輔助系統
            </h1>
            <p className="mt-5 text-base font-medium leading-8 text-blue-800 sm:text-lg">
              AI-assisted Individualized Education Program Platform
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 lg:mx-0">
              協助教師快速建立、管理與分析 IEP 資料，讓行政流程更清楚，讓個別化教育支持更精準。
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
          >
            {[
              ["AI 輔助撰寫", "降低重複作業"],
              ["資料整合", "快速掌握學生狀態"],
              ["行政管理", "支援審核與追蹤"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/80 bg-white/55 p-4 text-left shadow-sm shadow-blue-100/70 backdrop-blur-xl"
              >
                <p className="font-semibold text-blue-950">{title}</p>
                <p className="mt-1 text-sm text-slate-500">{description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
        >
          <motion.div
            className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-2xl sm:p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-sky-700">歡迎回來</p>
                <h2 className="mt-2 text-2xl font-bold tracking-normal text-blue-950">
                  登入 EyeEP
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="account"
                >
                  帳號
                </label>
                <div className="relative">
                  <User
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="account"
                    type="text"
                    value={account}
                    onChange={(event) => {
                      setAccount(event.target.value);
                      setErrors((current) => ({ ...current, account: "" }));
                    }}
                    placeholder="請輸入帳號"
                    className={`h-12 w-full rounded-2xl border bg-white/80 pl-12 pr-4 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.14)] ${
                      errors.account ? "border-red-300" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.account && (
                  <p className="mt-2 text-sm text-red-500">{errors.account}</p>
                )}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="password"
                >
                  密碼
                </label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setErrors((current) => ({ ...current, password: "" }));
                    }}
                    placeholder="請輸入密碼"
                    className={`h-12 w-full rounded-2xl border bg-white/80 pl-12 pr-12 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.14)] ${
                      errors.password ? "border-red-300" : "border-slate-200"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
                    aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  記住我
                </label>
                <button
                  type="button"
                  className="font-medium text-blue-700 transition hover:text-blue-900 hover:underline"
                >
                  忘記密碼
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-200 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-75"
                whileHover={{ y: loading ? 0 : -2 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    登入中
                  </>
                ) : (
                  <>
                    登入系統
                    <ArrowRight
                      className="h-5 w-5 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </>
                )}
              </motion.button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                快速登入入口
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-3">
              {loginMethods.map(({ label, icon: Icon }) => (
                <motion.button
                  key={label}
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/70 transition hover:border-blue-200 hover:bg-blue-50/80 hover:text-blue-800"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            EyeEP 智慧化 IEP 撰寫輔助系統 · 安全登入介面
          </p>
        </motion.div>
      </section>
    </main>
  );
}
