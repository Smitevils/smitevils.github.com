// Copyright (c) 2012 Sutoiku, Inc. (MIT License)
 
// Some algorithms have been ported from Apache OpenOffice:
 
/**************************************************************
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 * 
 *************************************************************/

function CUMIPMT(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  // Requires getFutureValue() and getPartialPayment() from Formula.js [http://stoic.com/formula/]

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return error if either rate, periods, or value are lower than or equal to zero
  if (rate <= 0 || periods <= 0 || value <= 0) return '#NUM!';

  // Return error if start < 1, end < 1, or start > end
  if (start < 1 || end < 1 || start > end) return '#NUM!';

  // Return error if type is neither 0 nor 1
  if (type !== 0 && type !== 1) return '#NUM!';

  // Compute cumulative interest
  var payment = getPartialPayment(rate, periods, value, 0, type);
  var interest = 0;
  interest = 0;
  if(start === 1) {
    if(type === 0) {
      interest = -value;
      start++;
    }
  }
  for (var i = start; i <= end; i++) {
    if (type === 1) {
      interest += getFutureValue(rate, i - 2, payment, value, 1 ) - payment;
    } else {
      interest += getFutureValue(rate, i - 1, payment, value, 0 );
    }
  }
  interest *= rate;

  // Return cumulative interest
  return interest;
}