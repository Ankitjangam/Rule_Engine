package com.ApplicationRuleEngine.Repository;

import com.ApplicationRuleEngine.Entity.Rule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RuleRepository extends JpaRepository<Rule,Long> {
}
