import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const DemoModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    "bot-field": "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // IMPORTANT: "form-name" must match <form name="..."> and hidden template in index.html
      const payload = {
        "form-name": "demo-request",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        "bot-field": formData["bot-field"],
      };

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);

      setIsSubmitted(true);
      toast({
        title: "Demo Request Sent!",
        description: "We'll contact you within 24 hours to schedule your demo.",
      });

      // reset & close
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "", "bot-field": "" });
        setErrors({});
        onClose();
      }, 3000);
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly at hello@startcode.id",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", email: "", company: "", message: "", "bot-field": "" });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Request a Demo
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              disabled={isSubmitting}
              className="h-6 w-6 rounded-full"
            />
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Request Submitted!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your interest. Our team will contact you within 24 hours to schedule your demo.
            </p>
            <Badge
              variant="outline"
              className="bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
            >
              We'll be in touch soon!
            </Badge>
          </div>
        ) : (
          <form
            name="demo-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* required for Netlify when submitting via fetch */}
            <input type="hidden" name="form-name" value="demo-request" />

            {/* honeypot */}
            <p className="hidden">
              <label>
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  value={formData["bot-field"]}
                  onChange={(e) => handleInputChange("bot-field", e.target.value)}
                />
              </label>
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`mt-1 ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`mt-1 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className={`mt-1 ${errors.company ? "border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
                {errors.company && <p className="text-sm text-red-500 mt-1">{errors.company}</p>}
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`mt-1 min-h-[100px] ${
                    errors.message ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  placeholder="Tell us about your project requirements..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#5e4bf5] hover:bg-[#5038d4] text-white"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              This form is handled by Netlify Forms (no backend needed).
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
