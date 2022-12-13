package rca.devopsexam.v1.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rca.devopsexam.v1.dtos.DoMathRequestDto;
import rca.devopsexam.v1.exceptions.InvalidOperationException;
import rca.devopsexam.v1.payload.ApiResponse;
import rca.devopsexam.v1.serviceImpls.MathOperatorImpl;

@RestController
@RequestMapping("/api/v1/do_math")
public class MathController {
    private final MathOperatorImpl mathOperatorImpl;

    public MathController(MathOperatorImpl mathOperatorImpl) {
        this.mathOperatorImpl = mathOperatorImpl;
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody DoMathRequestDto dto) throws InvalidOperationException {
        return ResponseEntity.ok(ApiResponse.success(mathOperatorImpl.doMath(dto.getOperand1(), dto.getOperand2(), dto.getOperation())));
    }
}
