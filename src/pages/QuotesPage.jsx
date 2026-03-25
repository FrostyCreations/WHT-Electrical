// v1.1.1 - Triggering xneelo deployment
import React, { useMemo, useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import './QuotesPage.css';

const formatCurrency = (val) => {
  return `R ${val.toLocaleString()}`;
};

const stripNumber = (text) => {
  if (!text) return "";
  return text.replace(/^\d+\.\s*/, "");
};

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  // Extract numbers, removing currency symbol, commas and any /mo suffix
  const numericPart = priceStr.replace(/[^\d]/g, '');
  return parseInt(numericPart, 10) || 0;
};

const isLinkedSocial = (id) => id === 'social-content-creation' || id === 'social-management';

const QuotesPage = () => {
  const { data: proposalData } = useEditor();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copied, setCopied] = useState(false);

  const pricingSections = useMemo(() => {
    return proposalData.sections.filter(section => section.data && section.data.price);
  }, [proposalData]);

  // Track which sections are selected for the quote
  const [selectedIds, setSelectedIds] = useState(() => {
    return new Set(pricingSections.map(s => s.id || s.data.title || s.data.eyebrow));
  });

  const toggleItem = (id) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const getApprovalText = () => {
    return "";
  };

  const handleApprove = () => {
    const recipient = "francois.bigondigital@gmail.com";
    const subject = `Proposal Approved: ${proposalData.client?.name || 'VanillaHub'}`;
    const approvalText = getApprovalText();
    
    // Attempt automatic clipboard copy
    try {
      navigator.clipboard.writeText(approvalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    // Trigger original mailto
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`;
    window.location.href = mailtoUrl;
    
    setIsApproved(true);
    setShowConfirm(false);
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(getApprovalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmail = () => {
    const recipient = "francois.bigondigital@gmail.com";
    const subject = `Proposal Approved: ${proposalData.client?.name || 'VanillaHub'}`;
    const approvalText = getApprovalText();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`;
    window.open(gmailUrl, '_blank');
  };

  const phaseGroups = {
    month1: ['brand-visual', 'competitor-analysis', 'website-audit'],
    month2: ['seo-foundations', 'website-tracking-audit', 'video-creation', 'seo-listings', 'google-bing-listing', 'social-profiles'],
    ongoing: ['social-media-management', 'google-ads', 'linkedin-ads', 'meta-ads', 'social-landing-page', 'mailer-funnel', 'whatsapp-automation', 'seo-blog-strategy']
  };

  const totals = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;
    
    const breakdown = {
      month1: { total: 0, items: [] },
      month2: { total: 0, items: [] },
      ongoing: { total: 0, items: [] }
    };

    pricingSections.forEach(section => {
      const id = section.id || section.data.title || section.data.eyebrow;
      if (!selectedIds.has(id)) return;

      const priceVal = parsePrice(section.data.price);
      const isMonthly = section.data.price.toLowerCase().includes('/mo');
      const label = section.data.quoteLabel || stripNumber(section.data.eyebrow) || section.data.title;

      if (isMonthly) {
        monthly += priceVal;
      } else {
        oneTime += priceVal;
      }

      // Phase breakdown
      if (phaseGroups.month1.includes(id)) {
        breakdown.month1.total += priceVal;
        breakdown.month1.items.push(label);
      } else if (phaseGroups.month2.includes(id)) {
        breakdown.month2.total += priceVal;
        breakdown.month2.items.push(label);
      } else if (phaseGroups.ongoing.includes(id)) {
        breakdown.ongoing.total += priceVal;
        breakdown.ongoing.items.push(label);
      }
    });

    return { oneTime, monthly, breakdown };
  }, [pricingSections, selectedIds]);

  return (
    <div className="quotes-page">
      <div className="quotes-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Proposal
          </Link>
          <div className="header-content">
            <h1 className="quotes-title">Investment Summary</h1>
            <p className="quotes-subtitle">Review quotes and approve the project plan for {proposalData.client?.name || 'VanillaHub'}.</p>
          </div>
        </div>
      </div>

      <div className="container quotes-container">
        <div className="quotes-grid">
          <div className="quotes-list-card glass-panel">
            <table className="quotes-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>Select</th>
                  <th>Section</th>
                  <th className="text-right">Investment</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingSections.map((section, index) => {
                  const id = section.id || section.data.title || section.data.eyebrow;
                  const isSelected = selectedIds.has(id);
                  const linkedSocial = isLinkedSocial(id);
                  
                  return (
                    <tr key={id} className={isSelected ? '' : 'deselected'}>
                      <td>
                        <label className="custom-checkbox">
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            onChange={() => toggleItem(id)} 
                          />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="section-info">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="section-name">{section.data.quoteLabel || stripNumber(section.data.eyebrow) || section.data.title}</span>
                          </div>
                          {section.data.price.toLowerCase().includes('/mo') && (
                            <span className="billing-tag">Monthly</span>
                          )}
                        </div>
                      </td>
                      <td className="text-right font-bold">
                        {section.data.price}
                      </td>
                      <td className="text-right">
                        <a href={section.data.quoteUrl || "#"} target="_blank" rel="noopener noreferrer" className="view-details-link">
                          View Details
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {pricingSections.length === 0 && (
              <div className="empty-state">
                <p>No pricing items found in this proposal.</p>
              </div>
            )}
          </div>

          <div className="quotes-summary-sidebar">
            <div className="summary-card glass-panel dark">
              <h3 className="summary-title">Total Investment</h3>
              
              <div className="summary-rollout">
                {/* Phase 1 */}
                <div className="summary-phase">
                  <span className="phase-label">PHASE 1: BRAND & LAUNCH</span>
                  
                  {totals.breakdown.month1.total > 0 && (
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 1 – Brand & Foundation</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month1.total)}</span>
                      </div>
                      <ul className="phase-item-list">
                        {totals.breakdown.month1.items.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="summary-divider"></div>

                  {totals.breakdown.month2.total > 0 && (
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 2 – Website & Platform</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month2.total)}</span>
                      </div>
                      <ul className="phase-item-list">
                        {totals.breakdown.month2.items.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="summary-divider"></div>

                {/* Phase 2 */}
                <div className="summary-phase">
                  
                  
                  {totals.breakdown.ongoing.total > 0 && (
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 3 & Ongoing</span>
                        <span className="amount">{formatCurrency(totals.breakdown.ongoing.total)} /mo</span>
                      </div>
                      <ul className="phase-item-list">
                        {totals.breakdown.ongoing.items.map(item => <li key={item}>{item}</li>)}
                        <li className="ad-spend-item">+ R 6,000 recommended ad spend</li>
                      </ul>
                      <p className="phase-terms">Subject to initial 3-month agreement, thereafter month-to-month.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="summary-divider"></div>

              {isApproved ? (
                <div className="approval-success-container glass-panel">
                  <div className="success-header">
                    <CheckCircle2 size={32} className="success-icon" />
                    <h4>Project Approved!</h4>
                  </div>
                  <p className="success-msg">Approval details copied to clipboard. If your email didn't open, use the buttons below:</p>
                  <div className="success-actions">
                    <button className="btn-success-action" onClick={openGmail}>
                      Open in Gmail
                    </button>
                    <button className="btn-success-action outline" onClick={handleManualCopy}>
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                  <button className="btn-success-reset" onClick={() => setIsApproved(false)}>
                    <ChevronLeft size={16} /> Back
                  </button>
                </div>
              ) : !showConfirm ? (
                <button className="btn-approve-all" onClick={() => setShowConfirm(true)}>
                  <CheckCircle2 size={20} className="mr-2" /> Approve All & Proceed
                </button>
              ) : (
                <div className="approval-confirm-container">
                  <p className="confirm-text">Confirm project approval?</p>
                  <div className="confirm-buttons">
                    <button className="btn-confirm-yes" onClick={handleApprove}>
                      Yes, Approve
                    </button>
                    <button className="btn-confirm-no" onClick={() => setShowConfirm(false)}>
                      No
                    </button>
                  </div>
                </div>
              )}
              
              <Link to="/" className="btn-view-all">
                <FileText size={20} className="mr-2" /> Return to Proposal
              </Link>
            </div>

            <div className="next-steps-info">
              <h4>Next Steps After Approval:</h4>
              <ul>
                <li>Invoice will be generated for setup fees.</li>
                <li>Onboarding session to be scheduled.</li>
                <li>Development of digital foundations begins.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuotesPage;
