// v1.2.2 - Consolidated Quotes Logic
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
  if (priceStr.toLowerCase().includes('valued')) return 0;
  const numericPart = priceStr.replace(/[^\d]/g, '');
  return parseInt(numericPart, 10) || 0;
};

const QuotesPage = () => {
  const { data: proposalData } = useEditor();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copied, setCopied] = useState(false);

  const pricingSections = useMemo(() => {
    return proposalData.sections.filter(section => section.data && section.data.price);
  }, [proposalData]);

  // Track which phases are selected for the quote
  const [selectedPhases, setSelectedPhases] = useState(new Set(['month1', 'month2', 'month3', 'month4']));

  const togglePhase = (id) => {
    const newSelected = new Set(selectedPhases);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedPhases(newSelected);
  };

  const phaseGroups = {
    month1: ['website-rebuild-p1', 'brand-visual', 'instagram-setup', 'content-calendar', 'facebook-optimisation', 'gmb-optimisation', 'email-setup'],
    month2: ['website-rebuild-p2', 'analytics-tracking', 'social-posting-m2'],
    month3: ['website-rebuild-p3', 'seo-citations', 'social-media-m3', 'google-ads-setup'],
    month4: ['social-media-m4', 'google-ads-m4', 'future-projects-m4']
  };

  const getApprovalText = () => {
    return `WHT Electrical Proposal Approved.\n\nPhases Selected:\n${Array.from(selectedPhases).join(', ')}`;
  };

  const handleApprove = () => {
    const recipient = "francois.bigondigital@gmail.com";
    const subject = `Proposal Approved: ${proposalData.client?.name || 'WHT Electrical'}`;
    const approvalText = getApprovalText();
    
    try {
      navigator.clipboard.writeText(approvalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

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
    const subject = `Proposal Approved: ${proposalData.client?.name || 'WHT Electrical'}`;
    const approvalText = getApprovalText();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`;
    window.open(gmailUrl, '_blank');
  };

  const totals = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;
    
    const breakdown = {
      month1: { total: 0, items: [], label: "Month 1: Strategy & Foundation", anchor: "month1-header" },
      month2: { total: 0, items: [], label: "Month 2: Visibility & Tracking", anchor: "month2-header" },
      month3: { total: 0, items: [], label: "Month 3: Lead Launch", anchor: "month3-header" },
      month4: { total: 0, items: [], label: "Month 4 & Ongoing Momentum", anchor: "month4-header" }
    };

    pricingSections.forEach(section => {
      const id = section.id || section.data.title || section.data.eyebrow;
      const priceVal = parsePrice(section.data.price);
      const isMonthly = section.data.price.toLowerCase().includes('/mo');
      const label = section.data.quoteLabel || stripNumber(section.data.eyebrow) || section.data.title;

      // Group into breakdown
      let phaseId = "";
      if (phaseGroups.month1.includes(id)) phaseId = "month1";
      else if (phaseGroups.month2.includes(id)) phaseId = "month2";
      else if (phaseGroups.month3.includes(id)) phaseId = "month3";
      else if (phaseGroups.month4.includes(id)) phaseId = "month4";

      if (phaseId) {
        breakdown[phaseId].total += priceVal;
        breakdown[phaseId].items.push(label);
        
        // Add to global totals if the phase is selected
        if (selectedPhases.has(phaseId)) {
          if (isMonthly) monthly += priceVal;
          else oneTime += priceVal;
        }
      }
    });

    const discount = (selectedPhases.has('month1') ? 5000 : 0) + (selectedPhases.has('month2') ? 5000 : 0) + (selectedPhases.has('month3') ? 5000 : 0);

    return { oneTime, monthly, breakdown, discount };
  }, [pricingSections, selectedPhases]);

  const phasesForTable = ['month1', 'month2', 'month3', 'month4'];

  return (
    <div className="quotes-page">
      <div className="quotes-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Proposal
          </Link>
          <div className="header-content">
            <h1 className="quotes-title">Investment Summary</h1>
            <p className="quotes-subtitle">Review quotes and approve the project plan for {proposalData.client?.name || 'WHT Electrical'}.</p>
          </div>
        </div>
      </div>

      <div className="container quotes-container">
        <div className="quotes-grid">
          <div className="quotes-list-card glass-panel">
            <table className="quotes-table grouped">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>Select</th>
                  <th>Investment Phase</th>
                  <th className="text-right">Gross Investment</th>
                </tr>
              </thead>
              <tbody>
                {phasesForTable.map((phaseId) => {
                  const phase = totals.breakdown[phaseId];
                  const isSelected = selectedPhases.has(phaseId);
                  
                  if (phase.total === 0) return null;

                  return (
                    <tr key={phaseId} className={isSelected ? 'phase-row' : 'phase-row deselected'}>
                      <td>
                        <label className="custom-checkbox">
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            onChange={() => togglePhase(phaseId)} 
                          />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="section-info">
                          <span className="section-name">{phase.label}</span>
                          <ul className="phase-sub-items">
                            {phase.items.map(item => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      </td>
                      <td className="text-right font-bold">
                        {formatCurrency(phase.total)}{phaseId === 'month4' ? ' /mo' : ''}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="quotes-summary-sidebar">
            <div className="summary-card glass-panel dark">
              <h3 className="summary-title">Your Investment Summary</h3>
              
              <div className="summary-rollout">
                {/* Month 1 */}
                {totals.breakdown.month1.total > 0 && selectedPhases.has('month1') && (
                  <div className="summary-phase">
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 1 Investment (Gross)</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month1.total)}</span>
                      </div>
                      <div className="phase-month-header discount">
                        <span>Loyalty Discount Applied</span>
                        <span className="amount">- {formatCurrency(5000)}</span>
                      </div>
                      <div className="phase-month-header net">
                        <span>Month 1 Total</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month1.total - 5000)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Month 2 */}
                {totals.breakdown.month2.total > 0 && selectedPhases.has('month2') && (
                  <div className="summary-phase">
                    <div className="summary-divider"></div>
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 2 Investment (Gross)</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month2.total)}</span>
                      </div>
                      <div className="phase-month-header discount">
                        <span>Loyalty Discount Applied</span>
                        <span className="amount">- {formatCurrency(5000)}</span>
                      </div>
                      <div className="phase-month-header net">
                        <span>Month 2 Total</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month2.total - 5000)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Month 3 */}
                {totals.breakdown.month3.total > 0 && selectedPhases.has('month3') && (
                  <div className="summary-phase">
                    <div className="summary-divider"></div>
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Month 3 Investment (Gross)</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month3.total)}</span>
                      </div>
                      <div className="phase-month-header discount">
                        <span>Loyalty Discount Applied</span>
                        <span className="amount">- {formatCurrency(5000)}</span>
                      </div>
                      <div className="phase-month-header net">
                        <span>Month 3 Total</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month3.total - 5000)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Month 4 */}
                {totals.breakdown.month4.total > 0 && selectedPhases.has('month4') && (
                  <div className="summary-phase">
                    <div className="summary-divider print-page-break-container"></div>
                    <span className="phase-label">MONTHLY MOMENTUM (FROM MONTH 4)</span>
                    <div className="summary-phase-month">
                      <div className="phase-month-header">
                        <span>Management Investment</span>
                        <span className="amount">{formatCurrency(totals.breakdown.month4.total)} /mo</span>
                      </div>
                      <div className="phase-month-header adspend">
                        <span>Google Adspend (Direct)</span>
                        <span className="amount">+ {formatCurrency(4000)} /mo</span>
                      </div>
                      <p className="phase-terms">Professional management and scaling of your lead generation system.</p>
                    </div>
                  </div>
                )}
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
                  <CheckCircle2 size={20} className="mr-2" /> Approve Selection
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
