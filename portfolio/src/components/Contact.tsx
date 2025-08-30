import React from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async () => {
    try {
      // Simulate async submission
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 2000);
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Get In Touch
        </motion.h2>

        <Card className="hover:-translate-y-1 transition-transform">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your name" {...register("name", { required: true })} />
                <Input placeholder="Email" type="email" {...register("email", { required: true })} />
              </div>
              <Textarea placeholder="Message" {...register("message", { required: true })} />
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={formState.isSubmitting} className="glow">
                  {formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <AnimatePresence>
                  {status !== "idle" && (
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className={
                        status === "success" ? "text-cyan-300" : status === "error" ? "text-rose-300" : ""
                      }
                    >
                      {status === "success" ? "Sent successfully!" : "Failed to send"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-slate-400 text-sm">
          Email: <a className="underline decoration-dotted" href="mailto:chaitany.mishra.tech@gmail.com">chaitany.mishra.tech@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

