// Service Details Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceType = urlParams.get('service') || 'threat-detection';
    
    const services = {
        'threat-detection': {
            title: 'Threat Detection & Response',
            subtitle: 'Advanced threat detection and rapid response solutions to protect your business from cyber attacks',
            overview: 'Our Threat Detection & Response service provides comprehensive 24/7 monitoring of your IT infrastructure, using advanced AI and machine learning algorithms to identify and neutralize threats before they can cause damage. With our Security Operations Center (SOC), you get enterprise-grade protection without the enterprise price tag.',
            features: [
                '24/7 Security Operations Center monitoring',
                'AI-powered threat intelligence',
                'Real-time incident response',
                'Automated threat containment'
            ],
            benefits: [
                'Reduce mean time to detect (MTTD)',
                'Minimize business disruption',
                'Protect brand reputation',
                'Compliance with industry standards'
            ]
        },
        'network-security': {
            title: 'Network Security',
            subtitle: 'Protect your network infrastructure with advanced firewalls, intrusion prevention, and secure network architecture',
            overview: 'Our Network Security service provides comprehensive protection for your network infrastructure. We deploy next-generation firewalls, implement secure network segmentation, and establish VPN solutions to ensure your network remains secure from both internal and external threats.',
            features: [
                'Next-Gen Firewall Solutions',
                'VPN & Secure Access',
                'Network Segmentation',
                'Intrusion Prevention Systems'
            ],
            benefits: [
                'Protect against unauthorized access',
                'Secure remote workforce connections',
                'Reduce network attack surface',
                'Compliance with security standards'
            ]
        },
        'data-protection': {
            title: 'Data Protection & Encryption',
            subtitle: 'Military-grade encryption and data loss prevention to safeguard your sensitive information',
            overview: 'Our Data Protection & Encryption service ensures your sensitive data is protected both at rest and in transit. We implement military-grade encryption, data loss prevention policies, and comprehensive backup solutions to keep your critical information secure.',
            features: [
                'End-to-End Encryption',
                'Data Loss Prevention',
                'Backup & Recovery Solutions',
                'Key Management Services'
            ],
            benefits: [
                'Protect sensitive data from breaches',
                'Meet compliance requirements',
                'Ensure business continuity',
                'Maintain customer trust'
            ]
        },
        'security-audits': {
            title: 'Security Audits & Compliance',
            subtitle: 'Comprehensive security assessments and compliance management to meet industry standards',
            overview: 'Our Security Audits & Compliance service helps you identify vulnerabilities, assess your security posture, and ensure compliance with industry regulations. We conduct thorough penetration testing, vulnerability assessments, and compliance audits.',
            features: [
                'Penetration Testing',
                'GDPR, HIPAA, SOC 2 Compliance',
                'Vulnerability Assessments',
                'Security Gap Analysis'
            ],
            benefits: [
                'Identify security weaknesses',
                'Meet regulatory requirements',
                'Improve security posture',
                'Reduce compliance risks'
            ]
        },
        'security-training': {
            title: 'Security Training & Awareness',
            subtitle: 'Empower your team with comprehensive security training to build a human firewall',
            overview: 'Our Security Training & Awareness service helps you build a security-conscious culture within your organization. We provide comprehensive training programs, phishing simulations, and awareness campaigns to ensure your employees are your first line of defense.',
            features: [
                'Phishing Simulation Programs',
                'Custom Training Modules',
                'Security Awareness Campaigns',
                'Compliance Training'
            ],
            benefits: [
                'Reduce human error incidents',
                'Build security culture',
                'Meet training requirements',
                'Improve overall security posture'
            ]
        },
        'cloud-security': {
            title: 'Cloud Security',
            subtitle: 'Secure your cloud infrastructure with comprehensive protection for AWS, Azure, and GCP',
            overview: 'Our Cloud Security service provides comprehensive protection for your cloud infrastructure across all major platforms. We implement cloud access security brokers, container security, and multi-cloud security strategies to keep your cloud assets secure.',
            features: [
                'Multi-Cloud Security',
                'Cloud Access Security Broker',
                'Container Security',
                'Cloud Compliance Management'
            ],
            benefits: [
                'Secure cloud migrations',
                'Protect cloud workloads',
                'Meet cloud compliance requirements',
                'Optimize cloud security costs'
            ]
        }
    };
    
    const service = services[serviceType] || services['threat-detection'];
    
    // Update page content
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-subtitle').textContent = service.subtitle;
    document.getElementById('service-overview').textContent = service.overview;
    
    // Update features
    const featuresList = document.getElementById('service-features');
    if (featuresList) {
        featuresList.innerHTML = service.features.map(feature => `
            <li class="flex items-start text-gray-300">
                <svg class="w-6 h-6 text-[#00E5FF] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                ${feature}
            </li>
        `).join('');
    }
    
    // Update benefits
    const benefitsList = document.getElementById('service-benefits');
    if (benefitsList) {
        benefitsList.innerHTML = service.benefits.map(benefit => `
            <li class="flex items-start text-gray-300">
                <svg class="w-6 h-6 text-[#FF00D4] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                ${benefit}
            </li>
        `).join('');
    }
});



