package com.ApplicationRuleEngine.Service;
import com.ApplicationRuleEngine.Entity.Rule;
import com.ApplicationRuleEngine.Repository.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RuleService {
    @Autowired
    private RuleRepository ruleRepository;

    public Rule createRule(String rule) {
        return ruleRepository.save(new Rule(rule));
    }

    public List<Rule> getAllRules() {
        return ruleRepository.findAll();
    }

    public String combineRules(List<String> rules) {
        return String.join(" AND ", rules);
    }
}
